document.addEventListener('DOMContentLoaded', function() {
    initSkillBars();
});

// 初始化技能条
function initSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = level + '%';
    });
}

// 项目经历展开与折叠功能
function toggleProject(header) {
    const projectItem = header.closest('.project-item');
    const projectContent = projectItem.querySelector('.project-content');
    const toggleIcon = header.querySelector('.toggle-icon');
    
    // 切换激活状态
    header.classList.toggle('active');
    projectContent.classList.toggle('active');
    
    // 简单的展开折叠
    if (projectContent.classList.contains('active')) {
        toggleIcon.style.transform = 'rotate(180deg)';
    } else {
        toggleIcon.style.transform = 'rotate(0deg)';
    }
}

// 导出函数供HTML调用
window.toggleProject = toggleProject;