<script>
  import Accordion from './acordian.svelte';

  const faqs = [
    {
      question: 'How to Download Video TikTok no Watermark?',
      answer: 'Open Tik Tok app on your phone/or Web on your browser.\nChoose whatever video you want to download.\nClick to the Share button at the right bottom.\nClick the Copy Link button.\nDownload by using your browsers: I want to keep things simple for you. No need to download or install any software. I make an application for this purpose as well but you can only install whenever you like sstiktok.onrender.com \nWait for our server to do its job and then, save the video to your device.',
    },
    {
      question: 'Where are TikTok videos saved after downloaded?',
      answer: 'When youre downloading files, they are usually saved into whatever folder you have set as your default. Your browser normally sets this folder for you. In browser settings, you can change and choose manually the destination folder for your downloaded TikTok videos.',
    },
    {
      question: 'Do i have to pay to ssTikTok to can download videos?',
      answer: `No, you don't have to pay for anything because our software is always free. You can support us by turning off your Ad Blocks or making donations. It supports our further development. For download music you must be logged in.`,
    },
  ];
</script>

<Accordion {faqs} />