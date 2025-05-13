# kubernetes_demo

## Estimated time for the whole terraform infrastructure to run and set up: ~30 minutes

kubectl apply -f db.yaml
kubectl apply -f backend.yaml

minikube tunnel
minikube service backend-svc --url

kubectl delete -f db.yaml
kubectl delete -f backend.yaml