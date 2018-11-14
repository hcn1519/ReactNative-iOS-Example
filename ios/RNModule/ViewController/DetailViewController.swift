//
//  DetailViewController.swift
//  RNModule
//
//  Created by 홍창남 on 14/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

import UIKit

class DetailViewController: UIViewController {


    let vcLabel: UILabel = {
        let label = UILabel()
        label.text = "Welcome DetailView Controller"
        label.textColor = .black
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        self.view.backgroundColor = .white
        self.view.addSubview(vcLabel)

        NSLayoutConstraint.activate([
            vcLabel.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
            vcLabel.centerYAnchor.constraint(equalTo: self.view.centerYAnchor)
            ])
    }
}
