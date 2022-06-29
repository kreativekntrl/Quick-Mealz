import {SocialMediaIconsReact} from 'social-media-icons-react';

const Footer = () => {
return (
<footer>
<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,114,177,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="45" />
<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="45" />
<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(66,103,178,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="45" />
<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="youtube-play" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255,0,0,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="45" />
</footer>
    );
}

export default Footer;