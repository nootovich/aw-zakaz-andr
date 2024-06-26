# Generated by Django 5.0.3 on 2024-03-09 15:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(default='', max_length=50)),
                ('created', models.DateTimeField(auto_now=True)),
                ('content', models.TextField(default='')),
                ('user_avatar', models.ImageField(upload_to='media/')),
            ],
        ),
        migrations.CreateModel(
            name='ReviewImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.ImageField(default='', upload_to='media/')),
                ('review', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='reviews.review')),
            ],
        ),
    ]
