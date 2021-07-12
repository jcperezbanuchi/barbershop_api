from rest_framework import serializers
from api.models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ('id', 'firstname', 'lastname', 'barber', 'phone', 'email', 'contact', 'date', 'time', 'comment')