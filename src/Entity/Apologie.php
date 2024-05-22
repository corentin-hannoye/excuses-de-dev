<?php

namespace App\Entity;

use App\Repository\ApologiesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApologiesRepository::class)]
class Apologie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $message = null;

    #[ORM\ManyToOne(inversedBy: 'apologies')]
    #[ORM\JoinColumn(nullable: false)]
    private ?HttpCode $http_code = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;

        return $this;
    }

    public function getHttpCode(): ?HttpCode
    {
        return $this->http_code;
    }

    public function setHttpCode(?HttpCode $http_code): static
    {
        $this->http_code = $http_code;

        return $this;
    }
}