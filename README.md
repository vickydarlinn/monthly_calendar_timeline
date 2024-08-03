# Calendar Timeline UI

This project is a desktop view replica of the Mobiscroll monthly calendar timeline created using ReactJs and the ViteJs framework. The project includes functionality for adding, moving, and deleting events, as well as navigating between months and highlighting the current date.

## Live Demo

[Live Demo Link](https://monthly-calendar-timeline.vercel.app/)

## Features

- Monthly calendar view
- Drag functionality to select the timeline and add events
- Events can be assigned different colors
- Drag and drop events to move them between dates horizontally
- Add more resources in the Y-axis
- Highlight today's date
- Navigate to the previous or next month
- Delete event functionality with a confirmation popup

## Technologies Used

- ReactJs
- ViteJs
- Vanilla CSS
- Interact.js (For dragging and resizing events)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/vickydarlinn/monthly_calendar_timeline.git
```

2. Navigate to the project directory:

```sh
cd monthly_calendar_timeline
```

3. Install the dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm run dev
```

5. Open your browser and navigate to:

```sh
http://localhost:5173
```

## Usage

- Drag across dates to create a new event.
- Click and drag an event to move it to a different date.
- Click on an event to delete it with a confirmation popup.
- Use the navigation buttons to move to the previous or next month.
- Today's date is highlighted.

## State Management

State is managed locally using React's `useState` and `useEffect` hooks to ensure persistence even after a hard refresh.

## Contributing

Feel free to fork the repository and make changes. Pull requests are welcome!

## License

This project is licensed under the MIT License. You can use it for any personal or for any commercial use freely.

## Contact

For any questions or feedback, please reach out to me at uttapalsangwan@gmail.com.
