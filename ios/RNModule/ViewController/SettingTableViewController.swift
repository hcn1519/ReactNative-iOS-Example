//
//  SettingTableViewController.swift
//  RNModule
//
//  Created by USER on 2018. 11. 13..
//  Copyright © 2018년 홍창남. All rights reserved.
//

import Foundation

class SettingTableViewController: UIViewController {

    let settingTableView = RCTRootView(RNBridgeManager.default,
                                       moduleName: "SettingTableView",
                                       initialProperties: nil)

    override func viewDidLoad() {
        super.viewDidLoad()

        settingTableView.frame = self.view.frame
        self.view.addSubview(settingTableView)

        self.title = "RN으로 생성된 TableView"
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(didSelectRNTableViewCell),
                                               name: NSNotification.Name(rawValue: "didSelectTableViewCell"),
                                               object: nil)
    }

    @objc func didSelectRNTableViewCell(notification: Notification) {
        if let userInfo = notification.userInfo,
            let indexPath = userInfo["indexPath"] as? IndexPath {
            DispatchQueue.main.async {
                let detailVC = DetailViewController()
                detailVC.selectedIndexPath = indexPath
                self.navigationController?.pushViewController(detailVC, animated: true)
            }
        }
    }
}
