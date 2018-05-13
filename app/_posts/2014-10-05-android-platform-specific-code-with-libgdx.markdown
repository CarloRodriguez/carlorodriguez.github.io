---
layout: post
title: "Android platform specific code with libGDX"
date: 2014-10-05 14:23:00 +0530
tags:
    - software
---

This is how I achieved to run android platform specific code with
[libGDX](http://libgdx.badlogicgames.com/), this example is about
running a Toast.

## Project example

Thanks to [Ákos Kovács](https://github.com/kovacsakos) for his
[project example](https://github.com/kovacsakos/gdx-interfaces).

## Action Resolver

Add an ActionResolver interface under the core project.

``` java
public interface ActionResolver {
    public void showToast(CharSequence text);
}
```

Here you can add the methods you're going to need, this example only
handles a toast, so for showing a toast I have made a `showToast`
method which takes a text, this text is the text the toast will show.

## Action Resolver for Android

Add an ActionResolverAndroid class under the android project.

``` java
public class ActionResolverAndroid implements ActionResolver {
    Handler handler;
    Context context;

    public ActionResolverAndroid(Context context) {
        handler = new Handler();
        this.context = context;
    }

    public void showToast(final CharSequence text) {
        handler.post(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(context, text, Toast.LENGTH_SHORT).show();
            }
        });
    }

}
```
Here we define the `showToast` method, to be able to show a toast we
need a `handler`, be sure you import the `import android.os.Handler;`
and not other one (I committed that mistake).

The handler is just needed if you're going to show some GUI stuff.

### Cannot resolve method error

Some methods will require you to prepend the context, so for example
trying to invoke the method `startActivity(intent)` will lead you
to an error, to solve this prepend the context as follows.

``` java
context.startActivity(intent);
```

## Your Game

Under your core project there is a class which extends for the `Game`
class, in this example that game class is called `YourGame`, add the
following.

``` java
public class YourGame extends Game {

    public ActionResolver actionResolver;
```

Add the following in the constructor.

``` java
public YourGame(ActionResolver actionResolver) {
    this.actionResolver = actionResolver;
```

## Android Launcher

Under your android project there is a class named `AndroidLauncher`,
we need to edit that class, It should look like this.

``` java
public class AndroidLauncher extends AndroidApplication {

    ActionResolverAndroid actionResolverAndroid;

    @Override
    protected void onCreate (Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        actionResolverAndroid = new ActionResolverAndroid(this);
        AndroidApplicationConfiguration config = new AndroidApplicationConfiguration();
        initialize(new YourGame(actionResolverAndroid), config);
    }
}
```

## Your Screens

In this case you will commonly try to use a Toast in a `Screen`.
Create a new screen like follows.

``` java
public class YourScreen implements Screen {

    YourGame game;
```

Then modify `YourScreen` class constructor like follows.

``` java
public YourScreen(final YourGame game) {
    this.game = game;
```

Now from `YourGame` class you'll set the new screen like this:

``` java
this.setScreen(new YourScreen(this));
```

## Invoking the showToast method

In a `Screen` you can invoke it in the `show` mehtod.

``` java
@Override
public void show() {
```

To invoke it use the following.

``` java
game.actionResolver.showToast("Hi!");
```

## Send data back to game

Sometimes we'll need to inform about data changes back to the game. We
do this as follows.

``` java
Gdx.app.postRunnable(new Runnable() {
    @Override
    public void run() {
        /* Here goes some data to send back to game */
        game.progressLoaded = true;
    }
});
```
