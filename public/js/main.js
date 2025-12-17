//icons
const sunIcon = document.querySelector('.bx-sun');
const moonIcon = document.querySelector('.bx-moon');

copyMail = document.querySelector('.copy-mail');
const tooltip = document.querySelector('.copy-mail').parentElement.querySelector('span:last-child');
const tooltipContainer = document.querySelector('.copy-mail').parentElement;

const checkIsMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
};

const updateMobileStyles = () => {
    const isMobileNow = checkIsMobile();
    if (isMobileNow) {
        copyMail.style.pointerEvents = 'none';
        copyMail.style.cursor = 'default';
        tooltip.style.display = 'none';
    } else {
        copyMail.style.pointerEvents = '';
        copyMail.style.cursor = '';
        tooltip.style.display = '';
    }
};

updateMobileStyles();
window.addEventListener('resize', updateMobileStyles);

copyMail.addEventListener('click', (e) => {
    if (checkIsMobile()) {
        e.preventDefault();
        e.stopPropagation();
        return;
    }
    
    navigator.clipboard.writeText('oscargonzalez150@gmail.com');
    copyMail.innerHTML = 'Email copied to clipboard';
    
    tooltipContainer.classList.remove('group');
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translateX(-50%) translateY(-4px)';
    
    setTimeout(() => {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => {
            tooltip.style.opacity = '';
            tooltip.style.transform = '';
            tooltipContainer.classList.add('group');
        }, 300);
    }, 3000);
    
    setTimeout(() => {
        copyMail.innerHTML = 'oscargonzalez150@gmail.com';
    }, 3000);
});

//themes

const userTheme = localStorage.getItem("Theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Year footer
let fecha = new Date();
let year = fecha.getFullYear();
let span = document.getElementById('year');
span.innerHTML= year;
