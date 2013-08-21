package controllers;

import org.apache.commons.io.IOUtils;
import play.*;
import play.mvc.*;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.*;

import models.*;

import java.util.UUID;



public class Splayt extends Controller {

    public static void index() {
        render();
    }

    public static void newUnit() {
        String newId = UUID.randomUUID().toString().substring(0, 8);
        redirect("/" + newId);
    }

    public static void showPage(String id) {
        renderTemplate("Application/page.html", id);
    }

    public static void upload(String qqfile) {

        if (request.isNew) {

            FileOutputStream moveTo = null;

            Logger.info("Name of the file %s", qqfile);
            // Another way I used to grab the name of the file
            String filename = request.headers.get("x-file-name").value();

            Logger.info("Absolute on where to send %s", Play.getFile("").getAbsolutePath() + File.separator + "uploads" + File.separator);
            try {

                InputStream data = request.body;
                moveTo = new FileOutputStream(new File(Play.getFile("").getAbsolutePath()) + File.separator + "uploads" + File.separator + filename);
                IOUtils.copy(data, moveTo);

            } catch (Exception ex) {

                Logger.error(ex.getMessage());
                // catch file exception
                // catch IO Exception later on
                renderJSON("{success: false}");
            }

        }


        renderJSON("{success: true}");
    }

}