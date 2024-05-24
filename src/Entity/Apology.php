<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Repository\ApologyRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    paginationEnabled: false,
    normalizationContext: ['groups' => 'read:item'],
    operations: [
        new GetCollection(),
        new Post()
    ]
)]
#[ApiFilter(SearchFilter::class, properties: ['http_code' => 'exact'])]
#[ORM\Entity(repositoryClass: ApologyRepository::class)]
class Apology
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups('read:item')]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups('read:item')]
    private ?string $message = null;

    #[ORM\ManyToOne(inversedBy: 'apologies')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups('read:item')]
    private ?HttpCode $http_code = null;

    #[ORM\ManyToOne(inversedBy: 'apologies')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups('read:item')]
    private ?Tag $tag = null;

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

    public function getTag(): ?Tag
    {
        return $this->tag;
    }

    public function setTag(?Tag $tag): static
    {
        $this->tag = $tag;

        return $this;
    }
}
