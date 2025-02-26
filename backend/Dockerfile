# Use a newer version of Node
FROM node:18-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./
RUN npm install --silent

# Copy app source code
COPY . .

# Expose port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
