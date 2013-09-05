package controllers;

import play.mvc.Controller;

/**
 * Created with IntelliJ IDEA.
 * User: magnus
 * Date: 2013-09-02
 * Time: 09:41
 * To change this template use File | Settings | File Templates.
 */
public class Examples extends Controller {

    public static void musicArtist() {
        renderTemplate("Application/Examples/music-artist.html");
    }

    public static void nostalgiaCommunity() {
        renderTemplate("Application/Examples/nostalgia-community.html");
    }

    public static void personalBlog() {
        renderTemplate("Application/Examples/personal-blog.html");
    }
}