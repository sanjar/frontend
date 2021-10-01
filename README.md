# About
Its a react application

# local build
yarn run build

# local development start 
yarn start


# To build 'frontend' image.
docker build . -t frontend:latest

# To run 'backend' image.
docker run -it -p 3001:3000 frontend:latest


Frontend will be available at : http://localhost:3001/


# Start minikube
minikube start

# Set docker env
eval $(minikube docker-env)             # unix shells
minikube docker-env | Invoke-Expression # PowerShell

# Deploy in minikube
kubectl apply -f Kubernetes/deployment.yaml

# Check that it's running
kubectl get pods


# Deploy using helm
helm install frontend frontend-chart/ --values frontend-chart/values.yaml