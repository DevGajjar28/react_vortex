from django.urls import path
from myapp import views

urlpatterns = [
    path('student/',views.StudentList.as_view()),
]