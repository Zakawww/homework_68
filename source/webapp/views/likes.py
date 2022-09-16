from django.http import JsonResponse
from django.views.generic.base import View

from webapp.models import Article, Comment


class ArticleLikes(View):
    def get(self, request, *args, **kwargs):
        article = Article.objects.get(pk=kwargs.get('pk'))
        user = self.request.user
        if user not in article.likes.all():
            article.likes.add(user)
            return JsonResponse({'likes': article.likes.all().count(), 'pk': article.pk})
        article.likes.remove(user)
        return JsonResponse({'dislikes': article.likes.all().count(), 'pk': article.pk})


class CommentLikes(View):
    def get(self, request, *args, **kwargs):
        comment = Comment.objects.get(pk=kwargs.get('pk'))
        user = request.user
        if user not in comment.likes.all():
            comment.likes.add(user)
            return JsonResponse({'likes': comment.likes.all().count(), 'pk': comment.pk})
        comment.likes.remove(user)
        return JsonResponse({'dislikes': comment.likes.all().count(), 'pk': comment.pk})
