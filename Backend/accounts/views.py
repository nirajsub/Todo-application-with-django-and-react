from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, permissions, status, filters
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class UserTokenObtainPairView(TokenObtainPairView):
    permissions_classes = (AllowAny,)
    serializer_class = UserTokenObtainPairSerializer

class ChangePasswordView(generics.UpdateAPIView):
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer

class GoalView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            if Account.objects.filter(user=self.request.user).exists():
                account = Account.objects.get(user=self.request.user)
                goal = Goal.objects.filter(user=account)
                serializer = GoalSerializer(goal, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            if Account.objects.filter(user=self.request.user).exists():
                account = Account.objects.get(user=self.request.user)
                goal = Goal.objects.filter(user=account)
                data = {
                    'user' : account.id,
                    'title' : request.data.get('title'),
                    'description' : request.data.get('description'),
                    'due_date' : request.data.get('due_date'),
                    'task_per_day' : request.data.get('task_per_day')
                }
                serializer = GoalSerializer(data=data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
            
    def put(self, request, pk, *args, **kwargs):
        account = Account.objects.get(user=self.request.user)
        goal = Goal.objects.get(id=pk, user=account)
        serializer = GoalSerializer(instance=goal, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, *args, **kwargs):
        if request.user.is_authenticated:
            if Account.objects.filter(user=self.request.user).exists():
                account = Account.objects.get(user=self.request.user)
                goal = Goal.objects.filter(id=pk, user=account)
                goal.delete()
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
class TaskView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            if Account.objects.filter(user=self.request.user).exists():
                account = Account.objects.get(user=self.request.user)
                task = Task.objects.filter(user=account)
                serializer = TaskSerializer(task, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request, *args, **kwargs):
        account = Account.objects.get(user=self.request.user)
        task = Task.objects.filter(user=account)
        data = {
            'user' : request.user,
            'title' : request.data.get('title'),
            'description' : request.data.get('description'),
            'time_required' : request.data.get('time_required'),
            'goal' : request.data.get('goal')
        }
        serializer = TaskSerializer(task, data=data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self, request, pk, *args, **kwargs):
        account = Account.objects.get(user=self.request.user)
        task = Task.objects.get(id=pk, user=account)
        serializer = TaskSerializer(instance=task, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, *args, **kwargs):
        if request.user.is_authenticated:
            if Account.objects.filter(user=self.request.user).exists():
                account = Account.objects.get(user=self.request.user)
                task = Task.objects.filter(id=pk, user=account)
                task.delete()
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class ActivityView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            if Account.objects.filter(user=self.request.user).exists():
                account = Account.objects.get(user=self.request.user)
                activity = Activity.objects.filter(user=account)
                serializer = ActivitySerializer(activity, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request, *args, **kwargs):
        account = Account.objects.get(user=self.request.user)
        task = Task.objects.filter(user=account)
        data = {
            'user' : request.user,
            'title' : request.data.get('title'),
            'description' : request.data.get('description'),
            'time_required' : request.data.get('time_required'),
            'goal' : request.data.get('goal')
        }
        serializer = ActivitySerializer(task, data=data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self, request, pk, *args, **kwargs):
        account = Account.objects.get(user=self.request.user)
        task = Task.objects.get(id=pk, user=account)
        serializer = ActivitySerializer(instance=task, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, *args, **kwargs):
        if request.user.is_authenticated:
            if Account.objects.filter(user=self.request.user).exists():
                account = Account.objects.get(user=self.request.user)
                task = Task.objects.filter(id=pk, user=account)
                task.delete()
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


