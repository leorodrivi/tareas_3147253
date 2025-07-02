document.addEventListener('DOMContentLoaded', () => {
    const recipeSearchInput = document.getElementById('recipeSearch');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    const clearFilterBtn = document.getElementById('clearFilterBtn');
    const recipeGrid = document.getElementById('recipeGrid');
    const recipeItems = recipeGrid ? Array.from(recipeGrid.getElementsByClassName('gallery-item')) : [];

    const filterRecipes = () => {
        const searchTerm = recipeSearchInput.value.toLowerCase().trim();

        recipeItems.forEach(item => {
            const title = item.querySelector('.gallery-item__title').textContent.toLowerCase();
            const description = item.querySelector('.gallery-item__description').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    const clearFilter = () => {
        recipeSearchInput.value = '';
        recipeItems.forEach(item => {
            item.style.display = 'block';
        });
    };

    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', filterRecipes);
    }

    if (clearFilterBtn) {
        clearFilterBtn.addEventListener('click', clearFilter);
    }

    if (recipeSearchInput) {
        recipeSearchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                filterRecipes();
            }
        });
    }

    if (!recipeSearchInput || !applyFilterBtn || !clearFilterBtn || !recipeGrid || recipeItems.length === 0) {
        console.warn("Algunos elementos de filtro o recetas no se encontraron en el DOM. Asegúrate de que los IDs y clases sean correctos.");
    }
});