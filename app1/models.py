from django.db import models

# Create your models here.

class User(models.Model):
    user_name = models.CharField(max_length=10, unique=True)
    user_password = models.CharField(max_length=15)
    user_type = models.BooleanField(null=True)
    user_driving = models.BooleanField(null=True)

    class Meta:
        verbose_name = "用户表"
        verbose_name_plural = "用户表"
    def __str__(self):
        return self.user_name

class Spot(models.Model):
    spot_name = models.CharField(max_length=20, unique=True)
    #spot_type = models.IntegerField(null=True)
    #spot_ticket_price = models.IntegerField(null=True)
    spot_booking = models.BooleanField(null=True)
    spot_class = models.IntegerField(null=True)
    #Score = models.ManyToManyField(User, through='Rating', ) django自带的多对多联系集定义
    class Meta:
        verbose_name = "景点表"
        verbose_name_plural = "景点表"
    def __str__(self):
        return self.spot_name
class Rating(models.Model):
    spot = models.ForeignKey(Spot, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(null=True)
    class Meta:
        verbose_name = "评分表"
        verbose_name_plural = "评分表"

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message_content = models.CharField(max_length=140, default='null')
    #message_time = models.DateTimeField(default='')
    class Meta:
        verbose_name = "留言表"
        verbose_name_plural = "留言表"

class SpotType(models.Model):
    spot_type_name = models.CharField(max_length=10, null=False, unique=True, default="null", primary_key=True)
    spot_type_id = models.IntegerField(null=True)
    class Meta:
        verbose_name = "景点类型表"
        verbose_name_plural = "景点类型表"

class spot_spottype_detail(models.Model):
    spot = models.ForeignKey(Spot, on_delete=models.CASCADE)
    spot_type = models.ForeignKey(SpotType, on_delete=models.CASCADE)
    class Meta:
        verbose_name = "景点-景点类型表"
        verbose_name_plural = "景点-景点类型表"