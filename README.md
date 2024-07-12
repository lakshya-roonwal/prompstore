# PromptHub

This project is a search engine built to scrape, store, and search for prompts from Vercel v0. The goal is to facilitate finding existing prompts similar to what you want to create. The project uses Next.js for the front-end and API, while the scraping side is handled with Python and Beautiful Soup.

## Features

- **Scrape Prompts:** Collect prompts from Vercel v0 using Python and Beautiful Soup.
- **Store Prompts:** Save the scraped prompts into a database.
- **Search Prompts:** Search for prompts using a front-end built with Next.js.

## Tech Stack

- **Front-End:** Next.js
- **Back-End/API:** Next.js API Routes
- **Scraping:** Python, Beautiful Soup
- **Database:** MongoDB

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
    
    ```bash
    git clone https://github.com/lakshyaroonwal/prompthub.git
    cd prompthub
    ```
    
2. **Install dependencies for the front-end:**
    
    ```bash
    pnpm install
    ```
### Configuration

1. **Environment Variables:**
    
    Create a `.env.local` file in the root of your project and add the following variables:
    
    ```
    MONGO_URL=your_database_url
    ```


## Usage

- **Scrape Prompts:**
    
    Run the `scrape.py` script to collect the latest prompts from Vercel v0 and store them in your database.
    
- **Search Prompts:**
    
    Use the search bar on the front-end to find prompts matching your criteria. The results will be fetched from your database.
    

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a pull request