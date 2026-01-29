# Using a large base image - junior engineer mistake
FROM node:18

# Running as root - junior engineer mistake (no USER directive)

# Not setting working directory first - poor practice
COPY . /app
WORKDIR /app

# Not copying package files separately for better caching - junior engineer mistake
# Should copy package.json and package-lock.json first

# Installing all dependencies including dev dependencies - junior engineer mistake
RUN npm install

# Building the application
RUN npm run build

# Using development server in production - junior engineer mistake
# Should use nginx or another production server
EXPOSE 3000

CMD ["npm", "start"]

# Missing:
# - .dockerignore file
# - Multi-stage build
# - Non-root user
# - Health check
# - Environment variables
# - Proper production setup