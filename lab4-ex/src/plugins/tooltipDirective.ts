// tooltipDirective.js
export default {
    beforeMount(el, binding) {
      // Параметри конфігурації
      const config = binding.value || {};
      const content = config.content || 'Tooltip text';
      const allowHtml = config.html || false;
      const delay = config.delay || 0;
      const triggerEvents = config.trigger ? config.trigger.split(' ') : ['hover'];
      const manualShow = config.show || false;
  
      // Створюємо tooltip елемент
      const tooltip = document.createElement('span');
      tooltip.classList.add('tooltip-text');
      
      // Якщо дозволено HTML
      if (allowHtml) {
        tooltip.innerHTML = content;
      } else {
        tooltip.textContent = content;
      }
  
      // Стилізуємо tooltip (в стилі W3Schools)
      tooltip.style.visibility = 'hidden';
      tooltip.style.backgroundColor = '#555';
      tooltip.style.color = '#fff';
      tooltip.style.textAlign = 'center';
      tooltip.style.borderRadius = '5px';
      tooltip.style.padding = '5px';
      tooltip.style.position = 'absolute';
      tooltip.style.zIndex = '1';
      tooltip.style.bottom = '125%';
      tooltip.style.left = '50%';
      tooltip.style.marginLeft = '-60px';
      tooltip.style.width = '120px';
      tooltip.style.opacity = '0';
      tooltip.style.transition = `opacity ${delay}ms`;
      
      // Додаємо стрілку до tooltip
      const arrow = document.createElement('span');
      arrow.classList.add('tooltip-arrow');
      arrow.style.position = 'absolute';
      arrow.style.top = '100%';
      arrow.style.left = '50%';
      arrow.style.marginLeft = '-5px';
      arrow.style.borderWidth = '5px';
      arrow.style.borderStyle = 'solid';
      arrow.style.borderColor = '#555 transparent transparent transparent';
  
      // Додаємо tooltip до елемента
      el.style.position = 'relative';
      el.appendChild(tooltip);
      el.appendChild(arrow);
  
      // Показати tooltip
      const showTooltip = () => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
      };
  
      // Приховати tooltip
      const hideTooltip = () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
      };
  
      // Встановлення тригерів
      if (triggerEvents.includes('hover')) {
        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
      }
  
      if (triggerEvents.includes('click')) {
        el.addEventListener('click', () => {
          tooltip.style.visibility === 'visible' ? hideTooltip() : showTooltip();
        });
      }
  
      if (triggerEvents.includes('focus')) {
        el.addEventListener('focus', showTooltip);
        el.addEventListener('blur', hideTooltip);
      }
  
      // Обробка ручного контролю показу підказки
      if (manualShow) {
        showTooltip();
      }
    }
  };
  