## Cloning the repo

Clone the repository to your local machine:
```
git clone https://github.com/surajsomc/CodeCommune.git
```

## How to run the backend?


Navigate into the /backend directory of the project:
```
cd backend
```

Install all node dependencies:
```
npm install
```

Run the node server:
```
npm run dev
```


## Backend Branching Guide

Pull the latest changes from the remote repo:  
```
git pull origin backend
```
Create a new branch from backend branch and switch to the new branch:  
```
git checkout -b your_branch_name backend  
```
-Make local changes and commit your code:  
```
git status  
git add <file1> <file2> <etc>  
git commit -m “Your commit message”
```
Push your changes to remote repo:  
```
git push origin your_branch_name
```
In GitHub, create a pull request so reviewers can review our changes  


## Frontend Branching Guide

Pull the latest changes from the remote repo:  
```
git pull origin frontend
```
Create a new branch from frontend branch and switch to the new branch:  
```
git checkout -b your_branch_name frontend  
```
-Make local changes and commit your code:  
```
git status  
git add <file1> <file2> <etc>  
git commit -m “Your commit message”
```
Push your changes to remote repo:  
```
git push origin your_branch_name
```
In GitHub, create a pull request so reviewers can review our changes
