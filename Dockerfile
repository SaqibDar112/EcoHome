# Step 1: Use official Node.js image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all project files
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Install 'serve' to serve the production build
RUN npm install -g serve

# Step 8: Expose port 3000 (inside container)
EXPOSE 3000

# Step 9: Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]