# Use an official Node.js image with a specified version as the base image
FROM node:14

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app will run
EXPOSE 80

# Build the Vite project using SWC
RUN pnpm run build

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["pnpm", "run", "serve"]
