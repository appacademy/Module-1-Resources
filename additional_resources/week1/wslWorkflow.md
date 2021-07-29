# WSL Workflow

One key thing about working in WSL is understanding that it is a separate file system on your computer \
We want to work from this file system NOT our windows file system. This will be very important when we are \
building applications and is still important now so we are comfortable with it.

## Pinning your Linux File System in Windows File Explorer

<!-- Let's start off by running ls to see if we have the appacademy directory

```bash
ls 
```
You should see your appacademy directory (folder) -->

Go into our GUI and pin your Linux file structure\
to your quick access

In Ubuntu open your GUI by running

```bash
explorer.exe .
```

From here, right click on `appacadmey` and click `Pin to Quick access`\
You should see the folder in your quick access now.\
**This is where you want to keep your files**

## Changing Google Chrome download settings

1. Click on the three vertical dots in the upper right-hand corner of Chrome
2. Select `Settings`
3. Type `download` into the search bar
4. Toggle on `Ask where to save each file before downloading`

This will now allow you to choose your appacademy directory as where you want to\
download the file

## Using the curl command to download a file

1. Right click on the download link
2. Click on `Copy Link Address`
3. In Ubuntu terminal, cd into the directory that you want to save the files to
4. Run this command

```bash
curl -O <paste link here>
```

This will download the file into the folder that you are currently in

## Unzipping files

### Using the File Explorer

* Right click on the .zip file and click `Extract All`

### Using the Ubuntu Terminal (preferred)

* Run the command unzip

```bash
unzip theFileYouDownloaded.zip
```

* If you have never ran this command before it might prompt you to download unzip

```bash
sudo apt install unzip
```

* I also recommend installing this

```bash
sudo apt install zip
```

## Opening current directory in VSCode

```bash
code .
```
