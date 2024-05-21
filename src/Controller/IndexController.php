<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class IndexController extends AbstractController
{
    #[Route(
        '/{reactRouting}',
        name: 'app_index',
        requirements: ['reactRouting' => '^(?!api).+'],
        defaults: ['reactRouting' => null]
    )]
    public function index(): Response
    {
        return $this->render('index/index.html.twig');
    }
}
