# Funny
### (not actually funny)

# Important: EDUCATIONAL ONLY!!!!!! Make sure follow the rules i do not take any responibility for action done with this code my only goal is to educate and with that please be responsiable with the code provided my goal is not to assist in the bypassing of security restrictions.
#
#
# By Scrolling Down you agree to the above ^
#
#
#
#
#

# You Can install any application from the files above ^ by just downloading the .zip and unziping the .zip (DO NOT DISTRIBUTE)


# How to Install Any Application (APP MUST BE IN DMG FORMAT)

Follow these steps to install an application from a `.dmg` file:

1. **Attach the Disk Image**
   Attach the disk image to the system without automatically mounting it:
   #### Tip: You can drag the dmg file into the terminal to automatically get the path.
   ```bash
   hdiutil attach /path/to/file.dmg -nomount
   ```

3. **Take Note of the Output**
   Save the output of the command to identify the attached disk (e.g., `/dev/disk4s1`).

4. **Create a Mount Point**
   Create a directory to serve as the mount point:
   ```bash
   mkdir ~/mnt
   ```

5. **Mount the Disk Image**
   Mount the disk image in read-only mode using the output from step 3:
   ```bash
   mount -t hfs -o rdonly /dev/disk4s1 ~/mnt
   ```

6. **Access the Contents**
   Open the mounted directory to access the application files:
   ```bash
   open ~/mnt
   ```

7. **Complete the Installation**
   Follow the application's installation instructions from the mounted directory.

## bypassing the firewall to access blocked websites (VPN)

Follow these steps to install a VPN:

1. https://account.protonvpn.com/downloads

3. **Configure and Use the VPN**
   - Create or sign in to ProtonVPN (Required)
   - Download the application and extract using the install any app method above ^.
   - Launch the application.
   - Follow the application's instructions to connect to your VPN and bypass the firewall to access blocked websites.


#### (YouTube + Tiktok + discord type applications use both previous methods)

# Installing Homebrew and Java without sudo access (Tools for nerds)

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


## installing Python without sudo access
Just install Visual Studio Code and the Python extension in it, or using Homebrew
