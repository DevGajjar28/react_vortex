
# from .models import Student
# from .serializers import StudentSerializer
from rest_framework.generics import ListAPIView
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login as auth_login
from .forms import signupform
from django.contrib import messages
# Create your views here.

# class StudentList(ListAPIView):
#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer
def signupview(request):
    if request.method == 'POST':
        form = signupform(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'User registered successfully!')
            return redirect('login')
        else:
            messages.error(request, 'Form is not valid. Please check the data.')
    else:
        form = signupform()

    return render(request, 'signup.html', {'form': form})
            
    # return render(request,'signup.html')

def custom_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            auth_login(request, user)  # Use auth_login instead of login
            return redirect('next')  # Ensure 'next' matches the name in your urls.py
        else:
            return render(request, 'login.html', {'error': 'Invalid credentials'})

    return render(request, 'login.html')

def Next(request):
    return render(request,'next.html')