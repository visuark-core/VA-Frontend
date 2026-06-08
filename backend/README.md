# Blog Backend

This backend serves blog posts from a Google Sheets spreadsheet and manages image uploads via Cloudinary.

## Setup

1. Copy `backend/.env.example` to `backend/.env`.
2. Configure Google Sheets:
   - Set `GOOGLE_SHEETS_BLOG_SHEET_ID` to the ID of your spreadsheet.
   - Provide service account credentials using one of:
     - `GOOGLE_SERVICE_ACCOUNT_JSON_PATH=./service-account.json`
     - `GOOGLE_SERVICE_ACCOUNT_JSON` with the full JSON object
   - Ensure the service account has access to the spreadsheet.
3. Configure Cloudinary (optional for image uploads):
   - Set `CLOUDINARY_CLOUD_NAME`
   - Set `CLOUDINARY_API_KEY`
   - Set `CLOUDINARY_API_SECRET`

## Run

Install dependencies:

```bash
cd backend
npm install
```

Start the server:

```bash
npm start
```

The backend will run at `http://localhost:4000`.

## API Endpoints

- `GET /blogs` — list all blog posts
- `GET /blogs/:id` — get a single blog post by ID
- `POST /blogs` — create a new blog post

### Sheet format

The spreadsheet must have a sheet named `Blogs` with columns:

- `id` — unique identifier
- `title` — blog post title
- `summary` — excerpt/summary
- `author` — author name
- `publishedAt` — publication date
- `content` — full blog post content

The backend reads from `Blogs!A2:F` and appends new posts to the same range.

### Image Uploads

Images are stored in Cloudinary under the `blog-posts` folder. Use the `cloudinary.js` utility to upload and delete images.

## Security Notes

- Never commit `.env` file to git
- Keep `service-account.json` local only (it's in `.gitignore`)
- API secrets are only used server-side
