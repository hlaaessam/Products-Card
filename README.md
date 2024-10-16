## [Projects Card Overview]

The **Projects Card** feature allows users to manage products within the application efficiently. Below is an explanation of the various functionalities included in the Projects Card.

### Features

1. **Add Product**
   - Users can add a product to the card by clicking the **+** button. Each click increases the product's quantity.
   - The card dynamically updates the **total price** based on the number of products added.

2. **Decrement Product**
   - Users can reduce the quantity of a product by clicking the **-** button. This decreases the count of that product.
   - If the quantity reaches zero, the product is removed from the card, and the **total price** is updated.

3. **Reset All Products**
   - The **Reset** button allows users to clear all products from the card and reset the **total price** to zero. 
   - This is useful for starting fresh or emptying the card quickly.

4. **Delete All Products**
   - The **Delete** button removes all products from the card at once. The card is cleared, and the **total price** is reset to zero.

5. **Change Mood**
   - The **Change Mood** feature allows users to toggle between different visual themes (e.g., light mode and dark mode). 
   - This enhances user experience by adjusting the appearance according to their preferences.

6. **Card Holder**
   - The **Card Holder** section displays all selected products, including their quantity and individual price. 
   - It provides an organized summary of everything currently added to the card.

7. **Total Price**
   - The **Total Price** section calculates and displays the total cost of all products in the card. It updates dynamically as products are added, decremented, or removed.
   - This gives users a real-time view of the cumulative price of their selections.


This card system is designed to be intuitive, providing real-time feedback with easy controls for managing products and prices.


---

### Technologies
- Html
- CSS
- JavaScript


### Platform and Libraries
- React
- Tailwind

<hr font-size=1>





## Project Setup Instructions

Follow these steps to get the project running on your local machine.

## Prerequisites

Before you begin, ensure that the following software is installed on your system:

- [Node.js](https://nodejs.org/en/) (If not installed, download and install it from the official website.)

## Installation Guide

1. **Clone the repository** or download the project folder to your local machine.

2. **Open the Project in Visual Studio Code**

   - Open **Visual Studio Code**.
   - Navigate to **File > Open Folder** and choose the project directory:  
     `your-project-name`.

3. **Open the Terminal**

   - In Visual Studio Code, open the integrated terminal by selecting **Terminal > New Terminal**.
   - Make sure the terminal is opened inside the project directory. If not, change the directory to the project folder using:
     ```bash
     cd your-project-name
     ```

4. **Install Project Dependencies**

   - Run the following command in the terminal to install the required dependencies:
     ```bash
     npm install
     ```
5. **Run the Project**

   - After setting up everything, you can start the development server using:
     ```bash
     npm run dev
     ```

---

This will start the project in development mode.

