# Funny
### (not actually funny)
#### Improved by Franco

# Important: EDUCATIONAL ONLY!!!!!! Make sure follow the rules i do not take any responibility for action done with this code my only goal is to educate and with that please be responsiable with the code provided my goal is not to assist in the bypassing of security restrictions.
#
#
# By Scrolling Down you agree to the above ^
#
#
#
#
#

# You Can install any application easy by just downloading the .zip and unziping the .zip (DO NOT DISTRIBUTE)


# How to Install Any Application

Follow these steps to install an application from a `.dmg` file:

1. **Attach the Disk Image**
   Attach the disk image to the system without automatically mounting it:
   ```bash
   hdiutil attach /path/to/file.dmg -nomount
   ```

2. **Take Note of the Output**
   Save the output of the command to identify the attached disk (e.g., `/dev/disk4s1`).

3. **Create a Mount Point**
   Create a directory to serve as the mount point:
   ```bash
   mkdir ~/mnt
   ```

4. **Mount the Disk Image**
   Mount the disk image in read-only mode using the output from step 3:
   ```bash
   mount -t hfs -o rdonly /dev/disk4s1 ~/mnt
   ```

5. **Access the Contents**
   Open the mounted directory to access the application files:
   ```bash
   open ~/mnt
   ```

6. **Complete the Installation**
   Follow the application's installation instructions from the mounted directory.

# Make a network tunnel

Follow these steps to make a vpn using a VPN:

1. https://drive.google.com/file/d/1QzoazrjsxT1RGHcT4aEsrFo0xpXYi1bJ/view?usp=sharing donwnload + unzip

3. **Configure and Use the VPN**
   - Launch the application.
   - Follow the application's instructions to connect to your VPN and bypass the firewall.


#### (YouTube + Tiktok + discord type applications use both previous commands)

# Installing Homebrew and Java without sudo access

## Installing Homebrew

1. Create a directory for Homebrew in your home folder:
```bash
mkdir -p $HOME/.homebrew
```

2. Download and extract Homebrew:
```bash
curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C $HOME/.homebrew
```

3. Add Homebrew to your PATH by adding this line to your `~/.zshrc`:
```bash
echo 'eval "$($HOME/.homebrew/bin/brew shellenv)"' >> ~/.zshrc
```

4. Reload your shell configuration:
```bash
source ~/.zshrc
```

5. Verify Homebrew installation:
```bash
brew --version
```

## Installing Java

### Option 1: Using SDKMAN

1. Install SDKMAN:
```bash
curl -s "https://get.sdkman.io" | bash
```

2. Source SDKMAN:
```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

3. Install Java 17:
```bash
sdk install java 17.0.9-tem
```

4. Verify Java installation:
```bash
java -version
```

### Option 2: Using Homebrew

1. Install Java 17 with auto-update disabled:
```bash
HOMEBREW_NO_AUTO_UPDATE=1 brew install openjdk@17
```

2. Verify Java installation:
```bash
java -version
```

## Troubleshooting

If you encounter any issues:

1. Make sure your PATH is correctly set by checking:
```bash
echo $PATH
```

2. If Java is not found, try sourcing your shell configuration again:
```bash
source ~/.zshrc
```

3. For Homebrew issues, try:
```bash
brew doctor
```

## Notes

- These instructions are specifically for users without sudo access
- The installations are performed in the terminal
- Make sure to restart your terminal after making PATH changes


## installing python without sudo access
just install Visual Studio Code and the python extension in it
