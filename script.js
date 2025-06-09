
    // FAQ toggle
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', function() {
        const item = this.parentElement;
        item.classList.toggle('open');
      });
    });

    // Audit form handler (mock, no real sending)
    document.getElementById('auditForm').addEventListener('submit', function(e){
      e.preventDefault();
      this.querySelector('button').disabled = true;
      this.querySelector('button').textContent = 'Envoi...';
      setTimeout(()=>{
        document.getElementById('auditSuccess').style.display = 'block';
        this.querySelector('button').style.display = 'none';
      }, 1100);
    });
  