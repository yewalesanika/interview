# Customer Review Management System

A web application for managing customer reviews built with HTML, CSS, and JavaScript.

## About

This project is a simple customer review management system where you can view, filter, and respond to customer reviews. It has a clean interface with a light theme and works on both desktop and mobile devices.

## Features

- View customer reviews in a list
- Filter reviews by status (All, Unread, Priority, Un-replied)
- Search reviews by customer name or content
- View detailed review information
- Reply to customer reviews
- Responsive design for mobile and desktop
- Star rating display

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5 (for responsive design)
- Font Awesome (for icons)

## How to Run

1. Download or clone the project
2. Open `index.html` in your web browser
3. The application will load with sample review data

## Project Structure

```
project/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── app.js          # Main JavaScript logic
│   ├── review.js      # Sample review data
└── README.md           # This file
```

## Key Features

### Review List
- Shows customer reviews with avatar, name, rating, and preview
- Indicates unread reviews with blue dots
- Priority reviews marked with red dots
- Reply indicator for responded reviews

### Filter Options
- **All**: Shows all reviews
- **Unread**: Shows only unread reviews
- **Priority**: Shows priority reviews
- **Un-replied**: Shows reviews without responses

### Search
- Search by customer name or review content
- Real-time filtering as you type

### Review Details
- Full review content with star rating
- Customer information and date
- Ability to reply to reviews
- Action buttons for bookmark, share, flag

### Responsive Design
- Works on desktop (3-column layout)
- Tablet view (2-column layout)
- Mobile view (single column with slide panels)

## How It Works

1. **Sample Data**: The app loads with 20 sample reviews from `js/reviews.js`
2. **Filtering**: Click filter tabs to show different review types
3. **Search**: Type in the search box to find specific reviews
4. **Select Review**: Click on a review to see full details
5. **Reply**: Use the reply form to respond to reviews

## Sample Data

The application includes 20 sample reviews with:
- Customer names and avatars
- Star ratings (1-5 stars)
- Review content
- Dates and status indicators
- Some reviews have attachments

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## Future Improvements

- Add backend API for real data
- User authentication
- Email notifications
- More advanced filtering options
- Export functionality

## Credits

- Icons: Font Awesome
- Images: Unsplash
- CSS Framework: Bootstrap