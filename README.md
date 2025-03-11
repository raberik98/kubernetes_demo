# kubernetes_demo

kubectl apply -f db.yaml
kubectl apply -f backend.yaml

minikube tunnel
minikube service backend-svc --url

kubectl delete -f db.yaml
kubectl delete -f backend.yaml