let reviews = [];
let filteredReviews = [];
let selectedReview = null;
let currentFilter = 'all';
let searchQuery = '';

function initApp() {
    loadReviews();
    setupEvents();
    renderReviews();
}

function loadReviews() {
    if (typeof reviewsData !== 'undefined') {
        reviews = reviewsData;
        filteredReviews = reviews;
    }
}
function setupEvents() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        searchQuery = e.target.value.toLowerCase();
        filterReviews();
    });

    const filterTabs = document.querySelectorAll('.filter-tab');
    for (let i = 0; i < filterTabs.length; i++) {
        filterTabs[i].addEventListener('click', function(e) {
            currentFilter = e.target.getAttribute('data-filter');
            setActiveTab(e.target);
            filterReviews();
        });
    }
}

function filterReviews() {
    let filtered = [];
        if (searchQuery === '') {
        filtered = reviews;
    } else {
        for (let i = 0; i < reviews.length; i++) {
            const review = reviews[i];
            if (review.reviewer.name.toLowerCase().indexOf(searchQuery) !== -1 || 
                review.content.toLowerCase().indexOf(searchQuery) !== -1) {
                filtered.push(review);
            }
        }
    }

    if (currentFilter === 'unread') {
        const unreadReviews = [];
        for (let i = 0; i < filtered.length; i++) {
            if (filtered[i].status === 'unread') {
                unreadReviews.push(filtered[i]);
            }
        }
        filtered = unreadReviews;
    } else if (currentFilter === 'priority') {
        const priorityReviews = [];
        for (let i = 0; i < filtered.length; i++) {
            if (filtered[i].priority === true) {
                priorityReviews.push(filtered[i]);
            }
        }
        filtered = priorityReviews;
    } else if (currentFilter === 'unreplied') {
        const unrepliedReviews = [];
        for (let i = 0; i < filtered.length; i++) {
            if (!filtered[i].response) {
                unrepliedReviews.push(filtered[i]);
            }
        }
        filtered = unrepliedReviews;
    }

    filteredReviews = filtered;
    renderReviews();
    updateCounts();
}

function renderReviews() {
    const reviewsList = document.getElementById('reviewsList');
    
    if (filteredReviews.length === 0) {
        reviewsList.innerHTML = '<div style="text-align: center; padding: 40px; color: #5f6368;">No reviews found</div>';
        return;
    }

    let html = '';
    for (let i = 0; i < filteredReviews.length; i++) {
        const review = filteredReviews[i];
        html += createReviewHTML(review);
    }
    
    reviewsList.innerHTML = html;

    const reviewItems = document.querySelectorAll('.review-item');
    for (let i = 0; i < reviewItems.length; i++) {
        reviewItems[i].addEventListener('click', function(e) {
            const reviewId = parseInt(e.currentTarget.getAttribute('data-review-id'));
            selectReview(reviewId);
        });
    }

    if (selectedReview === null && filteredReviews.length > 0) {
        selectReview(filteredReviews[0].id);
    }
}

function createReviewHTML(review) {
    let statusClass = '';
    if (review.status === 'unread') statusClass = 'unread';
    if (review.priority) statusClass = 'priority';
    
    const isSelected = selectedReview && selectedReview.id === review.id;
    
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= review.rating) {
            stars += '<i class="fas fa-star star"></i>';
        } else {
            stars += '<i class="fas fa-star star empty"></i>';
        }
    }

    return `
        <div class="review-item ${statusClass} ${isSelected ? 'active' : ''}" data-review-id="${review.id}">
            <div class="review-header">
                <div class="reviewer-info">
                    <img src="${review.reviewer.avatar}" alt="${review.reviewer.name}" class="reviewer-avatar">
                    <div class="reviewer-details">
                        <h4>${review.reviewer.name}</h4>
                        <div class="review-meta">
                            <div class="star-rating">${stars}</div>
                            <span class="rating-score">${review.rating}.0</span>
                        </div>
                    </div>
                </div>
                <div class="review-time">${formatDate(review.date)}</div>
            </div> 
            <div class="review-content">${truncateText(review.content, 100)}</div>
            ${review.response ? '<div class="reply-indicator"><i class="fas fa-reply"></i> 1 reply</div>' : ''}
            ${review.status === 'unread' ? '<div class="status-indicator unread"></div>' : ''}
            ${review.priority ? '<div class="status-indicator priority"></div>' : ''}
        </div>
    `;
}

function selectReview(reviewId) {
    selectedReview = null;
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].id === reviewId) {
            selectedReview = reviews[i];
            break;
        }
    }

    if (!selectedReview) return;

    const reviewItems = document.querySelectorAll('.review-item');
    for (let i = 0; i < reviewItems.length; i++) {
        reviewItems[i].classList.remove('active');
    }

    const selectedItem = document.querySelector('[data-review-id="' + reviewId + '"]');
    if (selectedItem) {
        selectedItem.classList.add('active');
    }

    // Removed automatic status update from unread to read
    showReviewDetail();
}


function showReviewDetail() {
    const content = document.getElementById('reviewDetailContent');
    
    if (!selectedReview) {
        content.innerHTML = '<div style="text-align: center; color: #5f6368; padding: 40px;">Select a review to view details</div>';
        return;
    }

    // Create stars
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= selectedReview.rating) {
            stars += '<i class="fas fa-star star"></i>';
        } else {
            stars += '<i class="fas fa-star star empty"></i>';
        }
    }

    let attachmentsHTML = '';
    if (selectedReview.attachments && selectedReview.attachments.length > 0) {
        attachmentsHTML = '<div class="review-attachments">';
        for (let i = 0; i < selectedReview.attachments.length; i++) {
            attachmentsHTML += `<img src="${selectedReview.attachments[i]}" alt="Attachment" class="attachment-thumbnail">`;
        }
        attachmentsHTML += '</div>';
    }

    let responseHTML = '';
    if (selectedReview.response) {
        responseHTML = `
            <div class="response-section">
                <div class="response-header">
                    <img src="${selectedReview.response.author.avatar}" alt="${selectedReview.response.author.name}" class="reviewer-avatar">
                    <div class="response-meta">
                        <span class="reviewer-name">${selectedReview.response.author.name}</span>
                    </div>
                </div>
                <div class="response-content">${selectedReview.response.content}</div>
            </div>
        `;
    }

    content.innerHTML = `
        <div class="review-detail">
            <div class="review-detail-header">
                <div class="review-detail-info">
                    <img src="${selectedReview.reviewer.avatar}" alt="${selectedReview.reviewer.name}" class="reviewer-avatar">
                    <div class="review-detail-meta">
                        <h4>${selectedReview.reviewer.name}</h4>
                        <div class="review-date">${formatDate(selectedReview.date)}</div>
                    </div>
                </div>
            </div>
            
            <div class="review-detail-rating">
                <div class="star-rating">${stars}</div>
                <span class="rating-score">${selectedReview.rating}.0</span>
            </div>
            
            <div class="review-detail-content">${selectedReview.content}</div>
            
            ${attachmentsHTML}
            
            <div class="review-detail-actions">
                <button class="action-btn" onclick="bookmarkReview()">
                    <i class="fas fa-bookmark"></i>
                </button>
                <button class="action-btn" onclick="shareReview()">
                    <i class="fas fa-share"></i>
                </button>
                <button class="action-btn" onclick="flagReview()">
                    <i class="fas fa-flag"></i>
                </button>
            </div>
        </div>
        
        ${responseHTML}
        
        <div class="reply-form">
            <textarea class="reply-textarea" placeholder="Enter your reply here..." id="replyTextarea"></textarea>
            <div class="reply-form-actions">
                <div class="reply-form-tools">
                    <button class="tool-btn"><i class="fas fa-paperclip"></i></button>
                    <button class="tool-btn"><i class="fas fa-smile"></i></button>
                </div>
                <button class="reply-submit-btn" onclick="submitReply()">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    `;
}


function updateCounts() {
    let allCount = reviews.length;
    let unreadCount = 0;
    let unrepliedCount = 0;
    
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].status === 'unread') unreadCount++;
        if (!reviews[i].response) unrepliedCount++;
    }

    document.querySelector('[data-filter="all"]').textContent = 'All (' + allCount + ')';
    document.querySelector('[data-filter="unread"]').textContent = 'Unread (' + unreadCount + ')';
    document.querySelector('[data-filter="unreplied"]').textContent = 'Un-replied (' + unrepliedCount + ')';
}

function setActiveTab(tab) {
    const tabs = document.querySelectorAll('.filter-tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    tab.classList.add('active');
}

function setActiveSidebar(item) {
    const items = document.querySelectorAll('.sidebar-item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    item.classList.add('active');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return days + ' days ago';
    
    return date.toLocaleDateString();
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function bookmarkReview() {
    alert('Review bookmarked!');
}

function shareReview() {
    alert('Review link copied to clipboard!');
}

function flagReview() {
    alert('Review flagged!');
}

document.addEventListener('DOMContentLoaded', function() {
    initApp();
}); 