# Use Node.js base image with Alpine Linux
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the entire Angular application
COPY . .

# Expose the port on which your Angular application runs (default: 4200)
EXPOSE 4200

# Define the command to start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
