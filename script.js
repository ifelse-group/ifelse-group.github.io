// ツールチップの動的生成
document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.style.cursor = 'pointer';
    
    el.addEventListener('mouseenter', function() {
        const tooltipText = this.getAttribute('data-tooltip');
        let tooltip = document.getElementById('dynamic-tooltip');
        
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'dynamic-tooltip';
            tooltip.style.cssText = `
                position: fixed;
                background: #333;
                color: #fff;
                padding: 10px 15px;
                border-radius: 5px;
                font-size: 14px;
                z-index: 10000;
                max-width: 400px;
                white-space: pre-wrap;
                word-wrap: break-word;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            `;
            document.body.appendChild(tooltip);
        }
        
        tooltip.textContent = tooltipText.replace(/&#10;/g, '\n');
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = (rect.left + rect.width/2 - 200) + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.display = 'block';
    });
    
    el.addEventListener('mouseleave', function() {
        const tooltip = document.getElementById('dynamic-tooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    });
});