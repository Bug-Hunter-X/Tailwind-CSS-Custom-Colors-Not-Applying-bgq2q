# Tailwind CSS Custom Colors Not Applying

This repository demonstrates a common issue where custom colors defined in a Tailwind CSS configuration file fail to apply to HTML elements.  The problem is likely due to an incorrect configuration or a missing step in the build process.

## Bug Description

The provided `bug.js` file shows a standard Tailwind CSS configuration including a custom color. However, the corresponding HTML file in `index.html` fails to render this custom color. The expected outcome is that the `div` element should have a background color of `#007bff` (custom-blue). Instead, it remains with the default background or renders incorrectly.

## Solution

The `bugSolution.js` file provides a corrected Tailwind CSS configuration. The fix may involve updating paths to your template files, resolving conflicting configurations, or ensuring that the Tailwind CSS build process correctly compiles the custom styles.