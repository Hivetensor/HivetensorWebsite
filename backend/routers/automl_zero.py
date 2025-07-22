from fastapi import APIRouter
from typing import Dict, Any

router = APIRouter(prefix="/automl-zero", tags=["automl-zero"])

@router.get("/info")
def get_automl_zero_info() -> Dict[str, Any]:
    """Get information about the AutoML Zero research project"""
    return {
        "project_name": "AutoML Infinite-efficiency",
        "description": "Discovering machine learning algorithms from scratch through evolutionary computation",
        "current_focus": "MNIST Binary Classification",
        "status": "research",
        "github_url": "https://github.com/Hivetensor/AutoMLInfinite-efficiency",
        "features": [
            "Domain-Specific Language (DSL) for algorithm representation",
            "Evolutionary algorithm framework",
            "Bittensor network integration",
            "Vectorized execution engine",
            "Multi-task support (MNIST, CIFAR-10, regression)"
        ],
        "current_task": {
            "name": "MNIST Binary Classification",
            "description": "Distinguishing between digits 0 and 1 on downscaled MNIST dataset",
            "input_dim": 16,
            "task_type": "classification",
            "baseline_accuracy": 0.5,
            "target_accuracy": 0.95
        },
        "algorithm_components": {
            "setup_phase": "Initialize weights, biases, and hyperparameters",
            "predict_phase": "Forward pass through the discovered algorithm",
            "learn_phase": "Update parameters based on training data"
        },
        "evolutionary_params": {
            "max_generations": 15,
            "population_size": 100,
            "mutation_rate": 0.1,
            "crossover_rate": 0.8
        },
        "supported_operations": [
            "const", "const_vec", "gaussian", "uniform",
            "add", "sub", "mul", "div",
            "abs", "exp", "log", "sin", "cos", "tan", "heaviside"
        ]
    }