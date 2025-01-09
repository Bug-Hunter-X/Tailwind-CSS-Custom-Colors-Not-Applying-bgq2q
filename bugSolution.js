```javascript
// ... your Tailwind CSS configuration ...

module.exports = {
  // ... other configurations ...
  content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@themesberg/flowbite/**/*.js' //Include flowbite for all components
  ], // Make sure this includes all your template files
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // Example custom color
      },
    },
  },
  plugins: [],
};
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <div class="bg-custom-blue p-4">
    This should be blue!
  </div>
</body>
</html>
```