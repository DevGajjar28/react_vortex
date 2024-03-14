from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login as auth_login
from django.views.decorators.http import require_POST
from django.contrib.auth.models import User
from django.http import JsonResponse

@require_POST
# @csrf_exempt
def register(request):
    form = UserCreationForm(request.POST)
    if form.is_valid():
        form.save()
        return JsonResponse({'message': 'User registered successfully'})
    else:
        errors = form.errors.as_json()
        return JsonResponse({'error': errors}, status=400)

@require_POST
def login_user(request):
    form = AuthenticationForm(request, request.POST)
    if form.is_valid():
        user = form.get_user()
        auth_login(request, user)
        return JsonResponse({'message': 'Login successful'})
    else:
        return JsonResponse({'error': 'Invalid username or password'}, status=400)
