from rest_framework import serializers
from .models import Todo

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'firstname', 'lastname', 'barber', 'phone', 'email', 'contact', 'date', 'time', 'comment')