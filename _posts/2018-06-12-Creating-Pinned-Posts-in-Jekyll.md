---
layout: post
title: Creating Pinned Posts in Jekyll
categories: [blog]
redirect_from: "2018/06/12/Creating-Pinned-Posts-in-Jekyll/"
---

<p class="lead">
To create pinned (or sticky) posts in Jekyll, all you have to do is create a variable to add to your post’s front matter, then tweak the index.html Liquid code to include those posts at the top of your site’s pagination.
</p>

### Choose a Variable

The variable you add to your post's front matter doesn't have to be defined elsewhere first. However, for each post you want pinned, you must use the same variable name. For example, I simply chose 'pinned' as my variable and set it with a value of true in the front matter:

```md
---
layout: post
title: Example Post
pinned: true
---
```

### Modify the index.html Code

Next, you have to modify the code in your index.html file that iterates through your posts and adds them to your pagination pages. Ultimately, you write two for-loops: one to find and display the pinned posts, and the other to display the remaining posts (excluding the pinned posts).

Below is an example without the additional HTML:

```liquid
{% raw %}{% for post in paginator.posts %}
  {% if post.pinned %}
    Pinned Post! 
    {{ post.title }}
    {{ post.date }}
    {{ post.content }}
  {% endif %}
{% endfor %}

{% for post in paginator.posts %}
  {% unless post.pinned %}
    Regular Post.
    {{ post.title }}
    {{ post.date }}
    {{ post.content }}
  {% endunless %}
{% endfor %}{% endraw %}
```

These two for-loops simply either include pinned posts, or don't include pinned posts. The block of code including pinned posts is first so that those posts appear first. It's that simple. The only other thing to do is to style a heading or emphasized text above the pinned post which prominently displays 'Pinned Post' or some other indicator.