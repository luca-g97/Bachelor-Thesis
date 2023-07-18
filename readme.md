**German version of the instructions below**

(based on https://www.makeuseof.com/how-to-install-docker-windows-10-11/)

------------------------------------------------------------------------------------------------------
ENGLISH VERSION OF THE INSTRUCTIONS
-------------------------------------------------------------------------------------------------------

**-------------------------Install and run the application on Windows-------------------------**

**Installation of the Windows Subsystem for Linux (WSL 2) – Program is needed for Docker:**

*Before you install Docker through WSL 2, you’ll have first to install WSL 2 (with the default Ubuntu image).* 
1. Launch the Start menu, search for ***cmd*** and select ***Run as administrator***. 
2. Enter the following command: ***wsl --update*** and press Enter. The Subsystem is now getting installed, this may take a few minutes. Allow any upcoming request.

**Installation of the required programs:**

Use ***Google Chrome*** or download ***Firefox for Windows*** if you haven´t already installed it by clicking on this link: https://www.mozilla.org/de/firefox/windows/.
Install it by double clicking it in the Download folder. Follow the instructions carefully.

*For optimum performance on Windows, I recommend installing Docker by integrating Docker Desktop with WSL 2.*
1. Download ***Docker Desktop for Windows*** by clicking on this link: https://docs.docker.com/desktop/install/windows-install/. 
Install it by double clicking it in the Download folder. Follow the instructions carefully.
2. Restart your system afterwards for the changes to take effect. 

*If you are not admin on the current system, you need to add the user first to the docker user group. Otherwise you can skip step 1 to 5.*
1. Launch the Start menu, search for ***Computermanagement*** and select ***Run as administrator***. 
2. Expand ***Local Users and Groups***, and select Groups.
3. Find the ***docker-users*** group, right-click and select ***Add to group***.
4. Add your user account or accounts by name (click on check name to make sure it was found). Click on ***OK*** afterward.
5. Sign out and sign back in again for these changes to take effect.
6. Launch Docker Desktop from the ***Start menu (this might take a while), and navigate to ***Settings (Settingswheel) > General***.
7. Ensure the ***Use WSL 2 based engine*** check box is enabled. 

*If an error occurs please have a look at the official documentation: https://docs.docker.com/desktop/install/windows-install/*

**Setup the docker container for the application:**

1. Open the explorer and pick a folder where you want to store the files needed for the application to run. 
2. When you found a suitable one, click onto the part without text in the line containing the path. The whole path should be marked blue now. If this is the case enter ***cmd*** there and hit Enter.
3. There should now a command window being opened which is using the current directory for execution. If this is the case, copy the following into the line and hit Enter: ***docker pull lucag97/bachelor-thesis***
4. Close the settings and click straight in the upper left corner on Images. There should be an Image called lucag97/bachelor-thesis now. Click on the “play button” saying ***Run*** if you move the mouse over it.
5. In the popup click on the arrow pointing downwards on the right side of Optional settings. Click in the line which says ***Host Port*** and enter ***0*** (zero) in there to pick a random free port. Click on ***Run*** afterwards.
6. It automatically opens the container interface. The container is now correctly set up. You can open the application now by clicking on the ***blue link directly above Inspect***. This will open a browser window showing the application (starting page is a language choice). 

*This section is only for users who don´t use Firefox or Chrome as their usual browser:*

7. Click in the URL search bar and copy everything there by pressing ***Ctrl + C*** at the same time.
8. Since this application is best usable in Firefox, you should open Firefox now if it is not set as your usual browser. To do this, click on the windows symbol in the bottom left corner. Enter ***firefox*** in there and open it by double clicking on the logo.
9. Paste the copied URL into the URL search bar and hit Enter. Now the application is set up correctly. (The language choice should appear again)

**-------------------------Install and run the application on MacOS-------------------------**

**Install the required programs:**

Download ***Firefox for MacOS*** if you haven´t already installed it by clicking on this link: https://www.mozilla.org/de/firefox/mac/.
Install it by double clicking it in the Download folder. Follow the instructions.

Download ***Docker Desktop for MacOS*** by clicking on this link: https://docs.docker.com/desktop/install/mac-install/.
1. Double-click on ***Docker.dmg*** to open the installer, then drag the Docker icon to the Applications folder.
2. Double-click on ***Docker.app*** in the Applications folder to start Docker and enter your password.
3. The Docker menu now displays the Docker Subscription Service Agreement window. Click on ***Accept***.
4. In the now opened window click ***Skip*** to get to the dashboard of Docker.

*If an error occurs please have a look at the official documentation: https://docs.docker.com/desktop/install/mac-install*

**Set up the docker container for the application:**

1. Open Finder and pick a folder where you want to store the files needed for the application to run. 
2. Hold Ctrl and click on the folder. Choose ***New Terminal at Folder*** from the dropdown menu.
3. There should now a command window being opened which is using the current directory for execution. If this is the case, copy the following into the line: ***docker pull lucag97/bachelor-thesis*** and hit Enter. The application image is now getting downloaded.
4. Change back to the docker window now. Click the upper left corner on Images (Cloudsymbol). There should be an Image called lucag97/bachelor-thesis now. Click on the “play button” saying Run if you move the mouse over it.
5. In the popup click on the arrow pointing downwards on the right side of Optional settings. Click in the line which says ***Host Port*** and enter ***0*** (zero) in there to pick a random free port. Click on ***Run*** afterwards.
6. It automatically opens the container interface. The container is now correctly set up. You can open the application now by clicking on the ***blue link directly above Inspect***. This will open a browser window showing the application (starting page is a language choice). 

*This section is only for users who don´t use Firefox as their usual browser:*

7. Click in the URL search bar and copy everything there by pressing ***Ctrl + C*** at the same time.
8. Since this application is best usable in Firefox, you should open Firefox now if it is not set as your usual browser. To do this, click the Launchpad in the Dock, then click on the app icon of Firefox.
9. Paste the copied URL into the URL search bar and hit Enter. Now the application is set up correctly. (The language choice should appear again)


**-------------------------Install and run the application on Linux-------------------------**

**Installation of the required programs:**

Install either ***Docker Engine*** (no interface, only console) or ***DockerDesktop*** (UI included).
To do so please visit the official documentation and pick the Linux distribution you use: https://docs.docker.com/engine/install/ 

Install ***Firefox*** or ***Chrome*** afterwards from the command line. This varies on each distribution, so please have a look in the official documentation of your Linux distribution for the install instructions.

**Set up the docker container for the application:**

Open the command line and enter the following in there: ***docker pull lucag97/bachelor-thesis***. This pulls the newest version of the image, that includes the application.

*If you installed ***Docker Engine***, you need to run the container via command line:*

1. To start the container you need to copy the following there: ***docker run --name BCA -d -p 0:8080 lucag97/bachelor-thesis***. Now the container is running.
2. We now just have to find out the port it is running on. Therefore you have to enter: ***docker ps -a*** in the console.
3. Search for the column ***PORTS*** and have a look at the port provided there (it should look like this for Example: 0.0.0.0:8080->8080/tcp). The relevant part is the number before the arrow (->).
4. Open now a browser window and enter the following scheme there: ***TheNameOfYourHost*** (by default: localhost)***:Portnumber*** (we just found out). For example the URL can look like this: localhost:32710

*If you installed ***Docker Desktop***, follow these steps to run the container:*

1. Open Docker Desktop and click straight in the upper left corner on Images. There should be an Image called lucag97/bachelor-thesis now. Click on the “play button” saying ***Run*** if you move the mouse over it.
2. In the popup click on the arrow pointing downwards on the right side of Optional settings. Click in the line which says ***Host Port*** and enter ***0*** (zero) in there to pick a random free port. Click on ***Run*** afterwards.
3. It automatically opens the container interface. The container is now correctly set up. You can open the application now by clicking on the ***blue link directly above Inspect***. This will open a browser window showing the application (starting page is a language choice). 

*This section is only for users who don´t use Firefox or Chrome as their usual browser.*

4. Click in the URL search bar and copy everything there by pressing ***Ctrl + C*** at the same time.
5. Since this application is best usable in Firefox, you should open Firefox now if it is not set as your usual browser.
6. Paste the copied URL into the URL search bar and hit Enter. Now the application is set up correctly. (The language choice should appear again)

---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
GERMAN VERSION OF THE INSTRUCTIONS
----------------------------------------------------------------------------------------------

**-------------------------Installation und Ausführung der Applikation unter Windows-------------------------**

**Installation des Windows Subsystems für Linux (WSL 2) – Programm wird benötigt für Docker:**

*Bevor Sie Docker mit WSL 2 installieren müssen sie zuerst WSL 2 (mit dem Standard Ubuntu Image) installieren.*
1. Öffnen Sie das Startmenü, und suchen sie nach ***cmd***. Wählen Sie ***Als Administrator ausführen aus***.
2. Schreiben Sie das folgende in die Kommandozeile: ***wsl --update*** und drücken Sie Enter. WSL 2 wird jetzt installiert. Dies kann einige Minuten in Anspruch nehmen. Akzeptieren Sie alle auftauchenden Popups.

**Installation der benötigten Programme:**

Verwenden Sie ***Google Chrome*** oder laden Sie ***Firefox für Windows*** herunter falls es noch nicht installiert ist indem Sie auf den Link klicken: https://www.mozilla.org/de/firefox/windows/. Installieren Sie es indem Sie einen Doppelklick auf die Datei im Download-Ordner ausführen.

*Für die optimale Leistung in Windows, installieren wir Docker mit WSL 2 Support:*
1. Laden Sie sich ***Docker Desktop für Windows*** herunter indem Sie auf den Link klicken: https://docs.docker.com/desktop/install/windows-install/. 
Installieren Sie es indem Sie es im Download-Ordner doppelklicken. Folgen Sie den Anweisungen.
2. Starten Sie Ihren PC danach neu um die Änderungen zu übernehmen. 

*Falls Sie kein Admin sind, müssen Sie den Nutzer zuerst zur Dockergruppe hinzufügen. Andernfalls können Sie Schritt 1 – 5 überspringen.*
1. Öffnen Sie das Startmenü, suchen Sie nach ***Computerverwaltung*** und wählen Sie ***Als Administratior ausführen*** aus.
2. Klicken Sie auf ***Lokale Benutzer und Gruppen*** und doppelklicken Sie auf Gruppen.
3. Machen Sie einen Rechtsklick auf die Gruppe ***docker-users*** und wählen Sie ***Zur Gruppe hinzufügen***.
4. Klicken Sie auf hinzufügen und tippen Sie den Namen des Nutzers ein. Überprüfen Sie diesen indem Sie auf Namen überprüfen klicken und anschließend mit ***OK*** bestätigen.
5. Melden Sie sich ab und loggen Sie sich anschließend wieder ein um die Änderungen zu übernehmen.
6. Starten Sie Docker aus dem Startmenü (dies kann etwas dauern), und navigieren Sie zu ***Settings (Einstellungsrad) > General***.
7. Vergewissern Sie sich, dass der Haken bei ***Use WSL 2 based engine*** gesetzt ist. 

*Falls ein Fehler auftaucht, schauen Sie sich bitte in die offizielle Dokumentation:  https://docs.docker.com/desktop/install/windows-install/*

**Aufsetzen des Docker-Containers für die Applikation:**

1. Öffnen Sie den Dateimanager und wählen Sie einen Ordner aus, in dem Sie die Dateien die für die Applikation benötigt werden speichern wollen. 
2. Wenn Sie einen passenden gefunden haben, klicken Sie auf den Teil innerhalb des Pfad-Feldes, der keinen Text enthält. Der gesamte Pfad sollte nun blau markiert sein. Falls das der Fall ist, geben Sie jetzt einfach ***cmd*** ein und drücken Sie Enter.
3. Es sollte nun eine Kommandozeile auftauchen, die als Ausführungsort das von Ihnen gewählte Verzeichnis hat. Wenn das der Fall ist, kopieren Sie bitte das folgende in die Kommandozeile: ***docker pull lucag97/bachelor-thesis*** und drücken Enter.
4. Schließen Sie die Einstellungen und klicken Sie in der oberen linken Ecke auf Images (Wolkensymbol). Dort sollte nun ein Image gelistet sein, dass lucag97/bachelor-thesis heißt. Klicken Sie nun auf den “Play-Button” der ***Run*** anzeigt wenn der Mauszeiger auf ihm ist.
5. Im auftauchenden Fenster klicken Sie auf den nach unten zeigenden Pfeil, der neben Optional Settings zu sehen ist. Klicken Sie in das Feld, das ***Host Port*** anzeigt und geben Sie dort ***0*** (null) ein, um einen zufälligen Port auszuwählen und Klicken Sie auf ***Run***.
6. Es öffnet sich nun automatisch die Container-Oberfläche, was zeigt, dass der Container korrekt aufgesetzt ist. Sie können nun die Applikation öffnen, indem Sie auf den ***blauen Link direkt oberhalb von Inspect*** klicken. Es öffnet sich nun ein Browserfenster. 

*Dieser Abschnitt ist nur für Nutzer die Firefox oder Chrome nicht als Standardbrowser festgelegt haben:*

7. Klicken Sie in die URL Suchleiste und kopieren Sie den Inhalt indem Sie ***Strg + C*** zur Gleichen Zeit drücken.
8. Da die Applikation am besten für Firefox optimiert ist, sollten Sie nun Firefox öffnen, falls dies nicht ihr Standardbrowser ist. Klicken Sie dafür auf das Windowssymbol am unteren Bildschirmrand und geben Sie dort ***firefox*** ein. Öffnen Sie den Browser durch einen Doppelklick auf das Logo.
9. Fügen Sie die kopierte URL in der URL Suchleiste ein und drücken Sie Enter. Die Applikation sollte nun erfolgreich aufgesetzt sein (Die Sprachauswahl sollte erneut auftauchen)


**-------------------------Installation und Ausführung der Applikation unter MacOS-------------------------**

**Installation der benötigten Programme:**

Laden Sie ***Firefox für MacOS*** herunter falls es noch nicht installiert ist indem Sie auf den Link klicken: https://www.mozilla.org/de/firefox/mac/.
Installieren Sie es nachdem Sie es im Download-Ordner gefunden haben. Folgen Sie den Installationsanweisungen.

Laden Sie ***Docker Desktop für MacOS*** herunter indem Sie auf diesen Link klicken: https://docs.docker.com/desktop/install/mac-install/. 
1. Doppelklicken Sie auf ***Docker.dmg*** um den Installationsvorgang zu starten. Ziehen Sie dann das Docker Icon in den Applikationsordner.
2. Doppelklicken Sie auf ***Docker.app*** im Applikationsordner um Docker zu starten und geben Sie ihr Passwort ein
3. Das Docker-Menü zeigt nun das Docker Abonnement-Bestätigungsfenster an. Drücken Sie auf ***Accept***.
4. Im nun geöffneten Fenster klicken Sie auf ***Skip*** um in das Dashboard von Docker zu kommen.

*Falls ein Fehler auftaucht, schauen Sie sich bitte in die offizielle Dokumentation: https://docs.docker.com/desktop/install/mac-install*

**Aufsetzen des Docker-Containers für die Applikation:**

1. Öffnen Sie Finder und wählen Sie einen Ordner aus, indem Sie die Dateien die für die Applikation benötigt werden speichern wollen. 
2. Halten Sie die Ctrl-Taste und klicken Sie auf den Ordner. Wählen Sie ***Neues Terminal beim Ordner*** aus.
3. Es sollte nun eine Kommandozeile auftauchen, die als Ausführungsort das von Ihnen gewählte Verzeichnis hat. Wenn das der Fall ist, kopieren Sie bitte das folgende in die Kommandozeile: ***docker pull lucag97/bachelor-thesis*** und drücken Sie Enter. Das Applikations-Image wird nun heruntergeladen.
4. Wechseln Sie nun wieder in das Docker-Fenster. Klicken Sie in der oberen linken Ecke auf Images (Wolkensymbol). Dort sollte nun ein Image gelistet sein, dass lucag97/bachelor-thesis heißt. Klicken Sie nun auf den “Play-Button” der ***Run*** anzeigt wenn der Mauszeiger auf ihm ist.
5. Im auftauchenden Fenster klicken Sie auf den nach unten zeigenden Pfeil, der neben Optional Settings zu sehen ist. Klicken Sie in das Feld, das ***Host Port*** anzeigt und geben Sie dort ***0*** (null) ein, um einen zufälligen Port auszuwählen. Klicken Sie im Anschluss auf den Button ***Run***.
6. Es öffnet sich nun automatisch die Container-Oberfläche, was zeigt dass der Container korrekt aufgesetzt ist. Sie können nun die Applikation öffnen, indem Sie auf den ***blauen Link klicken, der sich direkt über Inspect befindet***. Es öffnet sich nun ein Browserfenster das die Applikation zeigt (die Sprachauswahl). 

*Dieser Abschnitt ist nur für Nutzer die Firefox oder Chrome nicht als Standardbrowser festgelegt haben:*

7. Klicken Sie in die URL Suchleiste und kopieren Sie den Inhalt indem Sie ***Cmd + C*** zur gleichen Zeit drücken.
8. Da die Applikation am für Firefox optimiert ist, sollten Sie nun Firefox öffnen, falls dies nicht ihr Standardbrowser ist. Klicken Sie dafür auf das Launchpad im Dock und klicken Sie auf das Logo von Firefox.
9. Fügen Sie die kopierte URL in der URL Suchleiste ein und drücken Sie Enter. Die Applikation sollte nun erfolgreich aufgesetzt sein (Die Sprachauswahl sollte erneut auftauchen)

**-------------------------Install and run the application on Linux-------------------------**

**Installation der benötigten Programme:**

Installieren Sie entweder ***Docker Engine*** (keine grafische Oberfläche, nur Konsole) oder ***DockerDesktop*** (mit grafischer Oberfläche).
Dafür öffnen Sie bitte die offizielle Dokumentation und wählen Ihre verwendete Linux-Distribution aus: https://docs.docker.com/engine/install/ 

Installieren Sie ***Firefox*** oder ***Chrome*** im Anschluss via Kommandozeile. Dies variiert je nach Distribution, also werfen Sie bitte einen Blick in die offizielle Dokumentation Ihrer Linux-Distribution für die Installationsanweisungen.

**Aufsetzen des Docker-Containers für die Applikation**

Öffnen Sie die Kommandozeile und geben Sie das folgende dort ein: ***docker pull lucag97/bachelor-thesis***. Dies lädt die neueste Version der Applikation herunter.

*Falls Sie ***Docker Engine*** installiert haben, müssen Sie den Container via Kommandozeile starten:*

1. Um den Container zu starten, kopieren Sie bitte das Folgende dort hinein: ***docker run --name BCA -d -p 0:8080 lucag97/bachelor-thesis***. Nun ist der Container gestartet.
2. Sie müssen nun nur noch den Port herausfinden auf dem er läuft. Dafür geben Sie bitte ***docker ps -a** in die Kommandozeile ein.
3. Suchen Sie nach der Spalte ***PORTS*** und schauen Sie sich den dort angegebenen Port an (es sollte z.B. so aussehen: 0.0.0.0:8080->8080/tcp). Der relevante Teil ist die Zahl vor dem Pfeil (->).
4. Öffnen Sie nun ein Browser-Fenster und geben Sie die Daten nach dem folgenden Schema ein: ***Hostname*** (standardmäßig: localhost)***:Portnummmer*** (die Sie gerade herausgefunden haben). Die benötigte URL könnte beispielsweise so aussehen: localhost:32710

*Falls Sie ***Docker Desktop*** installiert haben, folgen Sie bitte den Schritten um den Container zu starten:*

1. Öffnen Sie Docker Desktop und klicken Sie in der oberen linken Ecke auf Images (Wolkensymbol). Dort sollte nun ein Image gelistet sein, dass lucag97/bachelor-thesis heißt. Klicken Sie nun auf den “Play-Button” der ***Run*** anzeigt wenn der Mauszeiger auf ihm ist.
2. Im auftauchenden Fenster klicken Sie auf den nach unten zeigenden Pfeil, der neben Optional Settings zu sehen ist. Klicken Sie in das Feld, das ***Host Port*** anzeigt und geben Sie dort ***0*** (null) ein, um einen zufälligen Port auszuwählen. Klicken Sie im Anschluss auf den Button ***Run***.
3. Es öffnet sich nun automatisch die Container-Oberfläche, was zeigt dass der Container korrekt aufgesetzt ist. Sie können nun die Applikation öffnen, indem Sie auf den ***blauen Link klicken, der sich direkt über Inspect befindet***. Es öffnet sich nun ein Browserfenster das die Applikation zeigt (die Sprachauswahl). 

*Dieser Abschnitt ist nur für Nutzer die Firefox oder Chrome nicht als Standardbrowser festgelegt haben:*

7. Klicken Sie in die URL Suchleiste und kopieren Sie den Inhalt indem Sie ***Cmd + C*** zur gleichen Zeit drücken.
8. Da die Applikation am für Firefox optimiert ist, sollten Sie nun Firefox öffnen, falls dies nicht ihr Standardbrowser ist
9. Fügen Sie die kopierte URL in der URL Suchleiste ein und drücken Sie Enter. Die Applikation sollte nun erfolgreich aufgesetzt sein (Die Sprachauswahl sollte erneut auftauchen)


-----------------------------------------------------------------------------
