from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth import logout
from .utilities import sign_up, log_in, curr_user
from django.core.serializers import serialize

import json

# Create your views here.

@api_view(['POST', 'PUT', 'GET'])
def user_capabilities(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            try:
                # Removes SessionID
                logout(request)
                return JsonResponse({"logout":True})
            except Exception as e:
                print(e)
                return JsonResponse({"logout":False})
        else:
            return sign_up(request.data)

        
    elif request.method == 'PUT':
        return log_in(request)
    
    elif request.method == 'GET':
        return curr_user(request)