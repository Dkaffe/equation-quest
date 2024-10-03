from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView

class MyApiView(APIView):
    def get(self, request):
        data = {"message": "Hello from Django!"}
        return Response(data)