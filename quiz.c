#include <stdio.h>


int main() {
    FILE *htmlFile = fopen("quiz.html", "w");
    if (htmlFile == NULL) {
        printf("Error creating HTML file.\n");
        return 1;
    }
    
    fprintf(htmlFile, "<html>\n");
    fprintf(htmlFile, "<head>\n");
    fprintf(htmlFile, "<title>QuizApp</title>\n");
    fprintf(htmlFile, "<link rel=\"stylesheet\" href=\"./styles.css\">\n");
    fprintf(htmlFile, "</head>\n");
    fprintf(htmlFile, "<body>\n");
    fprintf(htmlFile, "<div class=\"app\">\n");
    fprintf(htmlFile, "<h1>Quiziverse</h1>\n");
    fprintf(htmlFile, "<div class=\"quiz\">\n");
    fprintf(htmlFile, " <h2 id=\"question\">Loading...</h2>\n");
    fprintf(htmlFile, "<ul class=\"answer-buttons\">\n");
    fprintf(htmlFile, "<li id=\"btn1\">Loading..</li>\n");
    fprintf(htmlFile, "<li id=\"btn2\">Loading..</li>\n");
    fprintf(htmlFile, "<li id=\"btn3\">Loading..</li>\n");
    fprintf(htmlFile, "<li id=\"btn4\">Loading..</li>\n");
    fprintf(htmlFile, "</ul>\n");
    fprintf(htmlFile, "</div>\n");
    fprintf(htmlFile, "<button id=\"next\">Next</button>\n");
    fprintf(htmlFile, "<div>\n");
    fprintf(htmlFile, "<h2 id=\"scorecard\">...</h2>\n");
    fprintf(htmlFile, "</div>\n");
    fprintf(htmlFile, "</div>\n");
    fprintf(htmlFile, "<script src=\"./quiz.js\"></script>\n");
    fprintf(htmlFile, "</body>\n");
    fprintf(htmlFile, "</html>\n");

    fclose(htmlFile);

    printf("HTML file created successfully.\n");

    return 0;
}
