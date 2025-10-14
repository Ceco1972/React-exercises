# First verify Node.js is installed
node -v
npm -v

# Remove existing project if present
Remove-Item -Path "my-react-project" -Recurse -Force -ErrorAction SilentlyContinue

# Remove Vite project
Remove-Item -Path "my-vite-project" -Recurse -Force -ErrorAction SilentlyContinue

# Create new project directory
mkdir my-react-project
cd my-react-project

# Copy package.json from reference project
Copy-Item -Path "..\07-tic-tac-toe-starting-project\package.json" -Destination "."
Copy-Item -Path "..\07-tic-tac-toe-starting-project\package-lock.json" -Destination "."

# Install dependencies
npm install

# Start the development server (use the appropriate command for your project)
npm start     # for Create React App projects
# OR
npm run dev   # for Vite projects

# Navigate up one directory level
cd ..

# Or for multiple levels up:
# cd ..\..    # goes up two levels
# cd ..\..\.. # goes up three levels
# Navigate up one directory level
cd ..

# Or for multiple levels up:
# cd ..\..    # goes up two levels
# cd ..\..\.. # goes up three levels

# First verify Node.js is installed
node -v
npm -v

# Remove existing projects if present
Remove-Item -Path "my-vite-project" -Recurse -Force -ErrorAction SilentlyContinue

# Create new Vite project with React + JavaScript (no TypeScript)
npm create vite@latest my-vite-project -- --template react

# Navigate into project directory
cd my-vite-project

# Install dependencies
npm install

# Start the development server
npm run dev

# Remove old project if exists
Remove-Item -Path "tic-tac-toe-game" -Recurse -Force -ErrorAction SilentlyContinue

# Create new Vite project
npm create vite@latest tic-tac-toe-game -- --template react

# Navigate into project
cd tic-tac-toe-game

# Install dependencies
npm install

# Start the development server
npm run dev
