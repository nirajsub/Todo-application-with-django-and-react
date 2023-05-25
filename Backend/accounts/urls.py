from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from accounts.views import *

urlpatterns = [
    path('login/', UserTokenObtainPairView.as_view()),
    path('login/refresh/', TokenRefreshView.as_view()),
    path('register/', RegisterView.as_view()),
    path('change_password/<str:pk>/', ChangePasswordView.as_view()),

    path('task/', TaskView.as_view()),
    path('edittask/<str:pk>', TaskView.as_view()),
    path('goal/', GoalView.as_view()),
    path('editgoal/<str:pk>', GoalView.as_view()),
    path('activity/', ActivityView.as_view()),
    path('editactivity/<str:pk>', ActivityView.as_view()),
    path('occupation/', OccupationView.as_view()),
    path('editoccupation/<str:pk>', OccupationView.as_view()),
]
