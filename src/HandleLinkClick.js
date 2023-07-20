const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    const navigationHeight = document.querySelector('.fixed-navigation').offsetHeight;
    const topPosition = targetElement.offsetTop - navigationHeight - 5;
    window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
    });
};

export default handleLinkClick;